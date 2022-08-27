import { Star } from 'phosphor-react';
import { ElonContainer } from './styles';
import { QuoteIcon, UserComment, UserRating } from '../styles';
import { TestimonialProps } from '../../../@types/testimonial';

export function Elon(props: TestimonialProps) {
  return (
    <ElonContainer visibility={props.visibility}>
      <UserRating>
        <Star size={32} weight="fill" />
        5.0 Star Rating
      </UserRating>
      <UserComment>
        “If you're looking for someone who will challenge your Backend and really cut to the core of what's important for users, then Jesse is your
        man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.” Elon
      </UserComment>
      <QuoteIcon>
        <svg width="96" height="76" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.1333 36.7245C7.43477 36.7245 0.197754 29.269 0.197754 18.2223C0.197754 8.28161 8.49985 0 19.7445 0C32.0611 0 41.162 9.94066 41.162 25.1248C41.162 59.6371 15.9963 73.4421 0.197754 75.1012V59.9171C10.9099 57.9849 22.9534 47.2181 23.4928 35.3385C22.9534 35.6116 20.8164 36.7245 18.1333 36.7245Z"
            fill="#DFE3EB"
          />
          <path
            d="M72.7524 36.7245C62.0471 36.7245 54.8169 29.269 54.8169 18.2223C54.8169 8.28161 63.119 0 74.3637 0C86.6803 0 95.7812 9.94066 95.7812 25.1248C95.7812 59.6371 70.6154 73.4421 54.8169 75.1012V59.9171C65.529 57.9849 77.5725 47.2181 78.1119 35.3385C77.5725 35.6116 75.4356 36.7245 72.7524 36.7245Z"
            fill="#DFE3EB"
          />
        </svg>
      </QuoteIcon>
    </ElonContainer>
  );
}
