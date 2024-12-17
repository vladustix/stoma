import moment from "moment"

export const useMoment = (e: any) => {
  return moment().from(e);
}

export const scrollSector = (to: string) => {
  const el = document.getElementById(to);
  el?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
};
