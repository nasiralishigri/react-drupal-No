import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateArticleMutation, useCacheClearMutation } from "../apiSlice";
import { IconInfo } from "./IconInfo";
import { CreateNew, BackIcon } from "../Icons.jsx";
import { FormElement } from "./FormElement.jsx";
export default function CreateForm() {
    const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      image: "",
      body: "",
      tags: [""],
    },
  });
  const [createArticle, { isLoading: isCreateLoading }] =
    useCreateArticleMutation();
    const [cacheClear] = useCacheClearMutation();
    // if(isLoading) return 'Loading....'

  const onSubmit = async (data) => {
    data.tags = [data.tags]
    await createArticle(data).unwrap();
    await cacheClear().unwrap();
    navigate("/");

  };
  return (
    <div className="xl:container mx-auto mb-32">
      <div className="flex justify-center my-8">
        <div className="pt-12 text-left">
          <IconInfo icon={<BackIcon />} />
        </div>
        <h1 className="text-3xl sm:text-4xl text-pink-500 uppercase pt-12">
          Create
        </h1>
      </div>
      <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
        <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6">
          {/* <div className="text-center">
            <IconInfo icon={<CreateNew />} text={"Add Article"} />
          </div> */}
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="title"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Title"
                    fieldRef={field}
                    hasError={errors.name?.type === "required"}
                  />
                )}
              />
              <Controller
                name="image"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Image"
                    fieldRef={field}
                    hasError={errors.image?.type === "required"}
                  />
                )}
              />
              <Controller
                name="tags"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="text"
                    label="Tags"
                    fieldRef={field}
                    hasError={errors.tags?.type === "required"}
                  />
                )}
              />
              <Controller
                name="body"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormElement
                    type="textarea"
                    label="Body"
                    fieldRef={field}
                    hasError={errors.body?.type === "required"}
                  />
                )}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white font-medium uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
