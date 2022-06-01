import ContactTexts from '../organisms/ContactTexts';
import CommonSection from '../organisms/CommonSection';

const Contact = () => (
  <CommonSection
    section="contact"
    viewtitle="【お問い合わせ】"
    viewsubtitle="ここまで、ご覧いただきありがとうございます。私への問い合わせは、下記フォームをご利用ください😀"
    showFlg
  >
    <form>
      <ContactTexts />
    </form>
  </CommonSection>
);

export default Contact;
