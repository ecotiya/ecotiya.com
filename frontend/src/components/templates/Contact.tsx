import ContactTexts from '../organisms/ContactTexts';
import CommonSection from '../organisms/CommonSection';

const Contact = () => (
  <CommonSection
    section="contact"
    viewtitle="【お問い合わせ】"
    viewsubtitle="下記フォームに内容を記入後、送信ください。★自身のコメント要精査"
  >
    <form>
      <ContactTexts />
    </form>
  </CommonSection>
);

export default Contact;
