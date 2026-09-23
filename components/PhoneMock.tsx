// A real device frame, not a floating card of bubbles — this is what made
// the previous mockup read as a wireframe instead of a product. Chrome is
// close enough to Telegram's actual app to be recognizable (status bar,
// back chevron, avatar, name) without literally cloning their UI.

type Message = { from: "reader" | "aelin"; text: string };

export function PhoneMock({ messages }: { messages: Message[] }) {
  return (
    <div className="phone-frame">
      <div className="phone-notch" aria-hidden />
      <div className="phone-screen">
        <div className="phone-statusbar">
          <span>9:41</span>
          <div className="phone-statusbar-icons" aria-hidden>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <rect x="0" y="7" width="3" height="4" rx="0.5" fill="currentColor" />
              <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="currentColor" />
              <rect x="9" y="3" width="3" height="8" rx="0.5" fill="currentColor" />
              <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" fill="currentColor" opacity="0.4" />
            </svg>
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
              <rect x="0.5" y="0.5" width="15" height="10" rx="2.5" stroke="currentColor" />
              <rect x="16.5" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" />
              <rect x="2" y="2" width="12" height="7" rx="1" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="phone-chatheader">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="phone-back">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="phone-avatar" aria-hidden>A</div>
          <div>
            <p className="phone-chatname">Aelin</p>
            <p className="phone-chatstatus">book bestie · online</p>
          </div>
        </div>

        <div className="phone-messages">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`phone-bubble ${m.from === "aelin" ? "phone-bubble-aelin" : "phone-bubble-reader"}`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div className="phone-inputbar">
          <div className="phone-inputfield">Message</div>
        </div>
      </div>
    </div>
  );
}
