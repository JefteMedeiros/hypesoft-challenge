import { ArrowIcon } from "../../../styles/Global/ArrowIcon";
import {
  DiscussNowButton,
  ServiceCard,
  ServiceCardIcon,
  ServiceCardRole,
} from "../../../styles/Global/styles";

export function ProductDesign() {
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
            d="M35 26.6666V13.3333C34.9994 12.7487 34.8451 12.1746 34.5526 11.6685C34.26 11.1624 33.8396 10.7422 33.3333 10.4499L21.6667 3.78325C21.1599 3.49069 20.5851 3.33667 20 3.33667C19.4149 3.33667 18.8401 3.49069 18.3333 3.78325L6.66667 10.4499C6.16044 10.7422 5.73997 11.1624 5.44744 11.6685C5.1549 12.1746 5.0006 12.7487 5 13.3333V26.6666C5.0006 27.2511 5.1549 27.8252 5.44744 28.3313C5.73997 28.8374 6.16044 29.2576 6.66667 29.5499L18.3333 36.2166C18.8401 36.5091 19.4149 36.6632 20 36.6632C20.5851 36.6632 21.1599 36.5091 21.6667 36.2166L33.3333 29.5499C33.8396 29.2576 34.26 28.8374 34.5526 28.3313C34.8451 27.8252 34.9994 27.2511 35 26.6666Z"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.44995 11.6001L20 20.0168L34.55 11.6001"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 36.8V20"
            stroke="black"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ServiceCardIcon>
      <ServiceCardRole>
        Product <br /> Design
      </ServiceCardRole>
      <DiscussNowButton>
        <ArrowIcon />
      </DiscussNowButton>
    </ServiceCard>
  );
}
