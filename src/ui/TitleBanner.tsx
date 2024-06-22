interface Props {
  title?: string;
  subtitle?: string;
}

const TitleBanner = ({ subtitle, title }: Props) => {
  return (
    <div className="w-full mx-auto bg-reactBd-titleBg mt-20 bg-fill bg-center py-10 mdl:py-20">
      <div className="max-w-screen-2xl mx-auto text-center flex flex-col items-center justify-center">
        <h4 className="text-secondaryColor uppercase text-xs mdl:text-sm tracking-[4px] mb-2">
          {subtitle}
        </h4>
        <h1 className="font-titleFont text-4xl mdl:text-6xl font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleBanner;
