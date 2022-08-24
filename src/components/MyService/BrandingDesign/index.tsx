import { ArrowIcon } from "../../../styles/Global/ArrowIcon";
import {
  DiscussNowButton,
  ServiceCard,
  ServiceCardIcon,
  ServiceCardRole,
} from "../../../styles/Global/styles";

export function BrandingDesign() {
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
            d="M20 5V35M20 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H20V5ZM20 5H8.33333C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H20V5Z"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ServiceCardIcon>
      <ServiceCardRole>
        Branding <br /> Design
      </ServiceCardRole>
      <DiscussNowButton>
        <ArrowIcon />
      </DiscussNowButton>
    </ServiceCard>
  );
}