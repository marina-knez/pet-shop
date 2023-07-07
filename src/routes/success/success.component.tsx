import { useEffect, useState } from 'react';

import { SuccessPageWrapper, MessageContainer, MessageTitle, Message, SuccessImage } from './success.styles';

export type FormData = {
  name: string;
  email: string;
}

const Success = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const messageData = JSON.parse(storedData);
      setFormData(messageData);
      localStorage.removeItem('formData');
    }
  }, []);

  return (
    <SuccessPageWrapper>
      {formData && (
        <MessageContainer>
            <MessageTitle>Thank You for the email {formData.name}!</MessageTitle>
            <Message>We have sent You an email over at {formData.email}.</Message>
            <Message>We will get back to You as soon as we can.</Message>
        </MessageContainer>
      )}
      <SuccessImage src="/assets/puppy-thank-you.jpg" alt="Thank you puppy" title="hank you puppy" />
    </SuccessPageWrapper>
  );
};

export default Success;
