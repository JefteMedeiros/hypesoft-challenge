import { ArrowIcon } from "../../../styles/Global/ArrowIcon";
import {
  CardTitle,
  HoverButton,
  ServiceCard,
  ServiceCardIcon,
} from "../../../styles/Global/styles";

export function UIUIXDesign() {
  return (
    <ServiceCard>
      <ServiceCardIcon>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9999 3.33325L3.33325 11.6666L19.9999 19.9999L36.6666 11.6666L19.9999 3.33325Z"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.33325 28.3333L19.9999 36.6666L36.6666 28.3333"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.33325 20L19.9999 28.3333L36.6666 20"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ServiceCardIcon>
      <CardTitle>
        UI/UX
        <br /> Design
      </CardTitle>
      <HoverButton>
        <ArrowIcon />
      </HoverButton>
    </ServiceCard>
  );
}
