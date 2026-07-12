import { FilledButton } from "@/styles/common-styles";
import { ReviewSectionContainer } from "./reviewStyles";

/**
 * pass routerIdentity and email address as hidden inputs to the form
 * routerIdentity is from the useRouterIdentity hook/query parameter router
 * email address input will use a custom email address to help send emails via email js
 */

const ReviewSection = () => {
  return (
    <ReviewSectionContainer>
      <header>What do you think about our service?</header>
      <p>
        Let us know your thoughts and feedback on our service and what we should
        improve.
      </p>
      <input placeholder="routerIdentity" required hidden />
      <input placeholder="your email address" required hidden />
      <textarea placeholder="Write your review here..." rows={4} required />
      <FilledButton className="submit-button">Submit Review</FilledButton>
    </ReviewSectionContainer>
  );
};

export default ReviewSection;
