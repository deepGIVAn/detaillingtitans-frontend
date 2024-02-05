"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UseFormReturnType, isEmail, matches, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { validateString } from "@/helpers/common";
import {
  TextInput,
  PasswordInput,
  FileInput,
  rem,
  Textarea,
} from "@mantine/core";
import { IconFileCv, IconPhoto } from "@tabler/icons-react";
import { uploadFile, deleteFile } from "@/helpers/files";
import { UserService } from "@/services/userService";
import { StudioService } from "@/services/studioService";
import { toast } from "react-toastify";
import useAuth, { useAdmin } from "@/hooks/useAuth";

const CreateStudio = () => {
  const navigate = useRouter();
  const isLoggedIn = useAuth();
  const isAdmin = useAdmin();

  const icon = (
    <IconPhoto style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  // const [value, setValue] = useState<File | null>(null);
  // const [userId, setUserId] = useState<String>("");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      pincode: "",
      password: "",
      confirmpassword: "",
      company_name: "",
      gst_number: "",
      gst_doc: null,
      pan_number: "",
      pan_doc: null,
      studio_doc: null,
      aadhar_number: "",
      aadhar_doc: null,
      user_doc: null,
      comment: "",
    },
    validate: {
      name: (value) => validateString(value),
      email: isEmail("Invalid email"),
      mobile: matches(/^[0-9]{10}$/, "Invalid mobile number"),
      address: (value) => validateString(value),
      city: (value) => validateString(value),
      pincode: matches(/^[0-9]{6}$/, "Invalid pincode"),
      password: (value) => validateString(value),
      confirmpassword: (value) =>
        value == form?.values?.password ? null : "Passwords do not match",
      studio_doc: (value) => (value ? null : "Please Upload Studio Photo"),
      aadhar_number: (value) => validateString(value),
      aadhar_doc: (value) => (value ? null : "Please Upload Aadhaar Photo"),
      user_doc: (value) => (value ? null : "Please Upload Photo"),
    },
  });

  const { name, email, password, mobile } = form.values;

  const handleSubmit = async () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      let gstDoc = "",
        panDoc = "",
        studioDoc = "",
        aadharDoc = "",
        userDoc = "",
        gst_doc_name = `gstDoc_${Math.floor(
          1000000 + Math.random() * 9000000
        )}`,
        pan_doc_name = `panDoc_${Math.floor(
          1000000 + Math.random() * 9000000
        )}`,
        studio_doc_name = `studioDoc_${Math.floor(
          1000000 + Math.random() * 9000000
        )}`,
        aadhar_doc_name = `aadharDoc_${Math.floor(
          1000000 + Math.random() * 9000000
        )}`,
        user_doc_name = `userDoc_${Math.floor(
          1000000 + Math.random() * 9000000
        )}`;

      let res;
      let res2;
      const toastPromise = () =>
        new Promise(async (resolve, reject) => {
          res = await UserService.createUser({
            name,
            email,
            password,
            mobile,
          });
          if (res?.data?._id) {
            form.values.gst_doc
              ? (gstDoc = await uploadFile(form.values.gst_doc, gst_doc_name))
              : null;
            form.values.pan_doc
              ? (panDoc = await uploadFile(form.values.pan_doc, pan_doc_name))
              : null;
            form.values.studio_doc
              ? (studioDoc = await uploadFile(
                  form.values.studio_doc,
                  studio_doc_name
                ))
              : null;
            form.values.aadhar_doc
              ? (aadharDoc = await uploadFile(
                  form.values.aadhar_doc,
                  aadhar_doc_name
                ))
              : null;
            form.values.user_doc
              ? (userDoc = await uploadFile(
                  form.values.user_doc,
                  user_doc_name
                ))
              : null;
          }
          res2 = await StudioService.createStudio({
            ...form.values,
            user_doc_name: userDoc.length > 1 ? user_doc_name : "",
            aadhar_doc_name: aadharDoc.length > 1 ? aadhar_doc_name : "",
            studio_doc_name: studioDoc.length > 1 ? studio_doc_name : "",
            pan_doc_name: panDoc.length > 1 ? pan_doc_name : "",
            gst_doc_name: gstDoc.length > 1 ? gst_doc_name : "",
            userId: res?.data?._id,
            user_doc: userDoc,
            aadhar_doc: aadharDoc,
            studio_doc: studioDoc,
            pan_doc: panDoc,
            gst_doc: gstDoc,
            status: isAdmin ? true : false,
          });
          console.log(res);
          console.log(res2);
          if (res?.status == 201 && res2?.status == 201) {
            if (isLoggedIn) navigate.replace("/dashboard");
            else navigate.replace("/");
            resolve("Studio Created Successfully");
          }
          reject("Error while Studio Creation..");
        });

      toast.promise(toastPromise, {
        pending: {
          render() {
            return "Creating Studio..";
          },
        },
        success: {
          render({ data }) {
            return `${data}`;
          },
        },
        error: {
          render({ data }) {
            return `${data}`;
          },
        },
      });
    }
  };

  const [visible, { toggle }] = useDisclosure(false);
  const [visible2, { toggle: toggle2 }] = useDisclosure(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Detailing Titans Create Studio Owner
                </h3>
              </div>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      withAsterisk
                      placeholder="Enter Full Name"
                      label="Full Name"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("name", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      withAsterisk
                      placeholder="Enter Email Address"
                      label="Email Address"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("email", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      withAsterisk
                      placeholder="Enter Mobile Number"
                      label="Mobile Number"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("mobile", { type: "input" })}
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      withAsterisk
                      placeholder="Enter Address"
                      label="Address"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("address", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      withAsterisk
                      placeholder="Enter City"
                      label="City"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("city", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      withAsterisk
                      placeholder="Enter Pincode"
                      label="Pincode"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("pincode", { type: "input" })}
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <PasswordInput
                      w={"100%"}
                      withAsterisk
                      label="Password"
                      placeholder="Enter Password"
                      visible={visible}
                      classNames={{
                        wrapper: "w-full",
                      }}
                      onVisibilityChange={toggle}
                      {...form.getInputProps("password", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <PasswordInput
                      w={"100%"}
                      withAsterisk
                      label="Confirm Password"
                      placeholder="Confirm Your Password"
                      visible={visible2}
                      classNames={{
                        wrapper: "w-full",
                      }}
                      onVisibilityChange={toggle2}
                      {...form.getInputProps("confirmpassword", {
                        type: "input",
                      })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2"></div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      // withAsterisk
                      placeholder="Enter Register Company Name"
                      label="Register Company Name"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("company_name", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      // withAsterisk
                      placeholder="Enter GST Number"
                      label="GST Number"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("gst_number", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <FileInput
                      leftSection={icon}
                      label="GST Number (Upload Doc)"
                      // withAsterisk
                      clearable
                      placeholder="Upload Doc"
                      leftSectionPointerEvents="none"
                      {...form.getInputProps("gst_doc")}
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      // withAsterisk
                      placeholder="Enter Pan Number"
                      label="Pan Card"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("pan_number", { type: "input" })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <FileInput
                      leftSection={icon}
                      label="Pan Card (Upload Photo)"
                      // withAsterisk
                      clearable
                      placeholder="Upload Photo"
                      leftSectionPointerEvents="none"
                      {...form.getInputProps("pan_doc")}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <FileInput
                      leftSection={icon}
                      label="Studio (Upload Photo)"
                      withAsterisk
                      clearable
                      placeholder="Upload Photo"
                      leftSectionPointerEvents="none"
                      {...form.getInputProps("studio_doc")}
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <TextInput
                      w={"100%"}
                      withAsterisk
                      placeholder="Enter Aadhar Number"
                      label="Aadhar Card"
                      classNames={{
                        wrapper: "w-full",
                      }}
                      {...form.getInputProps("aadhar_number", {
                        type: "input",
                      })}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <FileInput
                      leftSection={icon}
                      label="Aadhar Card (Upload Photo)"
                      withAsterisk
                      clearable
                      placeholder="Upload Photo"
                      leftSectionPointerEvents="none"
                      {...form.getInputProps("aadhar_doc")}
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <FileInput
                      leftSection={icon}
                      label="User (Upload Photo)"
                      withAsterisk
                      clearable
                      placeholder="Upload Photo"
                      leftSectionPointerEvents="none"
                      // value={value}
                      // onChange={setValue}
                      {...form.getInputProps("user_doc")}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <Textarea
                    w={"100%"}
                    placeholder="Type your comments"
                    label="Comments"
                    autosize
                    classNames={{
                      wrapper: "w-full",
                    }}
                    minRows={3}
                    {...form.getInputProps("comment")}
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  Add Studio
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateStudio;
