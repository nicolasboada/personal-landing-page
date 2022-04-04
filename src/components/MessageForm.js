import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessageForm = ({ inputRef }) => {
  return (
    <form
      className="messageContainer"
      action="https://formspree.io/f/mlezwgjz"
      method="POST"
    >
      <label>Send your message</label>
      <input
        ref={inputRef}
        name="name"
        placeholder="name*"
        type="text"
        required
      />
      <input name="email" placeholder="email*" type="email" required />
      <textarea
        name="message"
        placeholder="write your message*"
        type="text"
        required
      />
      <button>
        Send Message
        <FontAwesomeIcon
          icon={faPaperPlane}
          size="xs"
          style={{ marginLeft: "5px" }}
        />
      </button>
    </form>
  );
};

export default MessageForm;
