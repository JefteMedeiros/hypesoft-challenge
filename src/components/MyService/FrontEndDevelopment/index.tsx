import { ArrowIcon } from "../../../styles/Global/ArrowIcon";
import {
  DiscussNowButton,
  ServiceCard,
  ServiceCardIcon,
  ServiceCardRole,
} from "../../../styles/Global/styles";

export function FrontEndDevelopment() {
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
            d="M26.6667 30L36.6667 20L26.6667 10"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3333 10L3.33325 20L13.3333 30"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ServiceCardIcon>
      <ServiceCardRole>
        Front end <br /> Development
      </ServiceCardRole>
      <DiscussNowButton>
        <ArrowIcon />
      </DiscussNowButton>
    </ServiceCard>
  );
}
