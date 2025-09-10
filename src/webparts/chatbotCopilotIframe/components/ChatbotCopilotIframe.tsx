import * as React from 'react';
import styles from './ChatbotCopilotIframe.module.scss';
import type { IChatbotCopilotIframeProps } from './IChatbotCopilotIframeProps';

interface IChatbotState {
  isOpen: boolean;
}

export default class ChatbotCopilotIframe extends React.Component<IChatbotCopilotIframeProps, IChatbotState> {
  constructor(props: IChatbotCopilotIframeProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  private toggleChatWindow = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  private closeChatWindow = (): void => {
    this.setState({ isOpen: false });
  };

  private renderAvatar = (): React.ReactElement => {
    return (
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Face outline */}
        <ellipse cx="50" cy="45" rx="25" ry="30" fill="white" fillOpacity="0.95"/>
        
        {/* Hair */}
        <path d="M25 35 C25 20, 35 15, 50 15 C65 15, 75 20, 75 35 C75 25, 65 20, 50 20 C35 20, 25 25, 25 35" fill="white" fillOpacity="0.7"/>
        
        {/* Eyes */}
        <circle cx="42" cy="40" r="2.5" fill="white" fillOpacity="0.3"/>
        <circle cx="58" cy="40" r="2.5" fill="white" fillOpacity="0.3"/>
        
        {/* Nose */}
        <ellipse cx="50" cy="48" rx="1.5" ry="2.5" fill="white" fillOpacity="0.2"/>
        
        {/* Mouth */}
        <path d="M45 55 Q50 58 55 55" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.4"/>
        
        {/* Neck/shoulders */}
        <path d="M35 70 C40 75, 60 75, 65 70 L65 85 C60 88, 40 88, 35 85 Z" fill="white" fillOpacity="0.8"/>
      </svg>
    );
  };

  private renderSmallAvatar = (): React.ReactElement => {
    return (
      <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Face outline */}
        <ellipse cx="50" cy="45" rx="25" ry="30" fill="currentColor"/>
        
        {/* Hair */}
        <path d="M25 35 C25 20, 35 15, 50 15 C65 15, 75 20, 75 35 C75 25, 65 20, 50 20 C35 20, 25 25, 25 35" fill="currentColor" fillOpacity="0.8"/>
        
        {/* Eyes */}
        <circle cx="42" cy="40" r="2.5" fill="currentColor" fillOpacity="0.6"/>
        <circle cx="58" cy="40" r="2.5" fill="currentColor" fillOpacity="0.6"/>
        
        {/* Nose */}
        <ellipse cx="50" cy="48" rx="1.5" ry="2.5" fill="currentColor" fillOpacity="0.4"/>
        
        {/* Mouth */}
        <path d="M45 55 Q50 58 55 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.7"/>
        
        {/* Neck/shoulders */}
        <path d="M35 70 C40 75, 60 75, 65 70 L65 85 C60 88, 40 88, 35 85 Z" fill="currentColor"/>
      </svg>
    );
  };

  public render(): React.ReactElement<IChatbotCopilotIframeProps> {
    const { isOpen } = this.state;

    return (
      <div className={styles.chatbotContainer}>
        {/* Chat Window */}
        {isOpen && (
          <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
              <div className={styles.chatTitle}>
                <div className={styles.avatarSmall}>
                  {this.renderSmallAvatar()}
                </div>
                <span>HR Assistant</span>
              </div>
              <button 
                className={styles.closeButton}
                onClick={this.closeChatWindow}
                title="Close chat"
              >
                ✕
              </button>
            </div>
            <div className={styles.chatBody}>
              <iframe 
                src="https://web.powerva.microsoft.com/environments/Default-64f77dc5-3c66-462b-a765-7e07b045624a/bots/crab7_debby/webchat?__version__=2"
                frameBorder="0"
                className={styles.chatIframe}
                title="HR Chatbot"
              />
            </div>
          </div>
        )}

        {/* Floating Chat Button */}
        <button 
          className={`${styles.floatingButton} ${isOpen ? styles.chatOpen : ''}`}
          onClick={this.toggleChatWindow}
          title="Chat with HR Assistant"
        >
          <div className={styles.avatar}>
            {this.renderAvatar()}
          </div>
        </button>
      </div>
    );
  }
}
