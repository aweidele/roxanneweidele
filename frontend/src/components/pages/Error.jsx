import { Template } from "../layout";

export const Error = () => {
  return (
    <Template>
      <div className="bg-china-rose text-white pt-45 pb-20 min-h-[75vh] flex items-center justify-center text-center">
        <div>
          <div className="text-9xl">404</div>
          <div className="text-6xl">That page can not be found</div>
        </div>
      </div>
    </Template>
  );
};
