import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [context, setContext] = useState("normal"); // New state for message context
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();
  const contextStyles = {
    normal: "bg-teal-500 text-white",
    formal: "bg-blue-600 text-white",
    sarcasm: "bg-yellow-500 text-black",
    angry: "bg-red-600 text-white",
    interrogation: "bg-indigo-950 text-white",
    serious: "bg-amber-800 text-white ",
    happy: "bg-orange-500 text-white",
    tease: "bg-pink-700 text-white",
    emotional: "bg-zinc-800 text-white",
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
        context: context || null, // ⬅️ Include context in the message
      });

      // Clear form
      setText("");
      setImagePreview(null);
      setContext("normal"); // Reset context after sending
      if (fileInputRef.current) fileInputRef.current.value = "";

    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex flex-col sm:flex-row gap-2">
            {/* Dropdown for message context */}
      <select
        value={context}
        onChange={(e) => setContext(e.target.value)}
        className={`border p-2 rounded-md mr-2 ${contextStyles[context]} `}
      >
        <option value="normal" className={`${contextStyles["normal"]}`}>Normal</option>
        <option value="formal"className={`${contextStyles["formal"]}`}>Formal</option>
        <option value="sarcasm"className={`${contextStyles["sarcasm"]}`}>Sarcasm</option>
        <option value="angry"className={`${contextStyles["angry"]}`}>Angry</option>
        <option value="interrogation"className={`${contextStyles["interrogation"]}`}>Interrogation</option>
        <option value="serious"className={`${contextStyles["serious"]}`}>Serious</option>
        <option value="happy"className={`${contextStyles["happy"]}`}>Happy</option>
        <option value="tease"className={`${contextStyles["tease"]}`}>Tease</option>
        <option value="emotional"className={`${contextStyles["emotional"]}`}>Emotional</option>
      </select>
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`hidden sm:flex btn btn-circle
                     ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;