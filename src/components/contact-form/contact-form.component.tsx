import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useNavigate } from "react-router-dom";

import { useFormik } from 'formik';
import * as Yup from 'yup'

import { ContactFormWrapper, Form, FormTitle, FormDescription, InputFieldsContainer, FormImageContainer, InputFieldContainer, Label, InputField, SelectField, Textarea, ButtonContainer } from './contact-form.styles';

const ContactForm = () => {

    const navigate = useNavigate();
        const goToFormSuccessPage = () => {
            navigate('/success')
        };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            queryType: "Complaint",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, "Name must be 20 charracters or less.")
                .required("Name is required."),
            email: Yup.string()
                .email("Invalid email address.")
                .required("Name is required."),
            message: Yup.string()
                .required("Message is required."),
        }),

        onSubmit: async (values) => {
            const postData = {
              ...values
            };
      
            try {
              const response = await fetch('http://localhost:4000/messages', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
              });

              const createdEntry = await response.json();
              localStorage.setItem('formData', JSON.stringify(createdEntry));
              goToFormSuccessPage();
      
            } catch (error) {
              console.error('Error:', error);
            }
          },
    });

    return (
        <ContactFormWrapper>
            <Form onSubmit={formik.handleSubmit}>
                <InputFieldsContainer>
                    <FormTitle>Contact Us</FormTitle>
                    <FormDescription>Got a question for us? Tell us how we can help You!</FormDescription>
                    <div>
                        <InputFieldContainer>
                            <Label 
                                htmlFor="name" 
                                className={formik.touched.name && formik.errors.name ? 'error-text' : ''}>
                                    {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                            </Label>
                            <InputField 
                                type="text" 
                                name="name" 
                                placeholder="Enter your name" 
                                required 
                                value={formik.values.name} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} />
                        </InputFieldContainer>
                        <InputFieldContainer>
                            <Label 
                                htmlFor="email" 
                                className={formik.touched.email && formik.errors.email ? 'error-text' : ''}>
                                    {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                            </Label>
                            <InputField 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                required 
                                value={formik.values.email} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} />
                        </InputFieldContainer>
                        <InputFieldContainer>
                            <Label htmlFor="queryType">
                                Query Type
                            </Label>
                            <SelectField 
                                as="select" 
                                name="queryType" 
                                onChange={formik.handleChange}>
                                    <option value="" disabled>Select Query Type </option>
                                    <option value="Complaint">Complaint</option>
                                    <option value="Products">Products</option>
                                    <option value="Webshop">Webshop</option>
                                    <option value="Advice and Support">Advice and Support</option>
                                    <option value="Other">Other</option>
                            </SelectField>
                        </InputFieldContainer>
                        <InputFieldContainer>
                            <Label 
                                htmlFor="message" 
                                className={formik.touched.message && formik.errors.message ? 'error-text' : ''}>
                                    {formik.touched.message && formik.errors.message ? formik.errors.message : "Message"}
                            </Label>
                            <Textarea 
                                name="message" 
                                placeholder="What would you like to know?" 
                                required 
                                value={formik.values.message} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} />
                        </InputFieldContainer>
                    </div>
                    <ButtonContainer>
                        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.send} className="button">Send</Button>
                    </ButtonContainer>
                </InputFieldsContainer>
                <FormImageContainer>
                    <img src="/assets/contact-puppy.jpg" alt="Contact puppy" title="Contact puppy" />
                </FormImageContainer>
            </Form>
        </ContactFormWrapper>
    )
}

export default ContactForm;