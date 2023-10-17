import { IconProps } from "@/lib/components/atoms/Icons/IconProps";
import dynamic from "next/dynamic";
export const getDynamicIcon = (icon: string, color?: string) => {

  return dynamic(
    () =>
      import(`@/lib/components/atoms/Icons/${icon}`).then((module) => {
        const IconComponent = module.default;
        return (props: IconProps) => <IconComponent {...props} color={color}></IconComponent>;
      }),
    { ssr: false,
      loading: () => <div>.</div> }
  );
};
