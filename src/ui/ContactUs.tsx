"use client";
import { useRouter } from "next/navigation";

interface Props {
  buttonData?: string;
}

const ContactUs = ({ buttonData }: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/contact")}
      className="relative text-white w-44 h-12 border-t-[1px] border-t-secondaryColor border-b-[1px] border-b-secondaryColor group overflow-hidden"
    >
      <button className="w-full h-full font-titleFont tracking-[2px] uppercase text-sm font-normal">
        {buttonData}
      </button>
      <span className="h-full w-[1px] bg-secondaryColor inline-block absolute right-0 -translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
      <span className="h-full w-[1px] bg-secondaryColor inline-block absolute left-0 translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
    </div>
  );
};

export default ContactUs;
