/* eslint-disable react/prop-types */
const FooterGroup = ({ title, t1, t2, t3 }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold">{title}</h1>
      <span className="text-base cursor-pointer">{t1}</span>
      <span className="text-base cursor-pointer">{t2}</span>
      <span className="text-base cursor-pointer">{t3}</span>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col-reverse h-full gap-4 md:gap-0 sm:flex-row sm:justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:h-48 bg-teal-50">
      <div className="flex flex-col justify-between">
        <div className="space-y-0">
          <h1 className="font-semibold">Farm Cast</h1>
          <p className="text-base">Lorem ipsum dolor sit.</p>
        </div>
        <span className="text-sm">© 2021 Farm Cast All rights reserved</span>
      </div>

      <div className="flex gap-12">
        <FooterGroup
          title={"Information"}
          t1={"About"}
          t2={"Product"}
          t3={"Blog"}
        />
        <FooterGroup
          title={"Company"}
          t1={"About"}
          t2={"Product"}
          t3={"Blog"}
        />
        <FooterGroup
          title={"Contact"}
          t1={"About"}
          t2={"Product"}
          t3={"Blog"}
        />
      </div>
    </div>
  );
};

export default Footer;
