import {
  CometChatActionsIcon,
  CometChatActionsView,
  CometChatDetailsTemplate,
  CometChatMessageOption,
  CometChatMessageTemplate,
  CometChatTheme,
} from "uikit-resources-lerna";
import { MessageBubbleAlignment } from "uikit-utils-lerna";
import { CometChat } from "@cometchat-pro/chat";
import {
  BaseStyle,
  FileBubbleStyle,
  ImageBubbleStyle,
  TextBubbleStyle,
} from "my-cstom-package-lit";

export abstract class DataSource {
  abstract getTextMessageOptions(
    loggedInUser: CometChat.User,
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): Array<CometChatActionsIcon | CometChatActionsView>;
  abstract getImageMessageOptions(
    loggedInUser: CometChat.User,
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): Array<CometChatActionsIcon | CometChatActionsView>;
  abstract getVideoMessageOptions(
    loggedInUser: CometChat.User,
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): Array<CometChatActionsIcon | CometChatActionsView>;
  abstract getAudioMessageOptions(
    loggedInUser: CometChat.User,
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): Array<CometChatActionsIcon | CometChatActionsView>;
  abstract getFileMessageOptions(
    loggedInUser: CometChat.User,
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): Array<CometChatActionsIcon | CometChatActionsView>;
  abstract getBottomView(
    message: CometChat.BaseMessage,
    alignment: MessageBubbleAlignment
  ): any;
  abstract getTextMessageContentView(
    message: CometChat.TextMessage,
    alignment: MessageBubbleAlignment,
    theme: CometChatTheme
  ): any;
  abstract getImageMessageContentView(
    message: CometChat.MediaMessage,
    alignment: MessageBubbleAlignment,
    theme: CometChatTheme
  ): any;
  abstract getVideoMessageContentView(
    message: CometChat.MediaMessage,
    alignment: MessageBubbleAlignment,
    theme: CometChatTheme
  ): any;
  abstract getAudioMessageContentView(
    message: CometChat.MediaMessage,
    alignment: MessageBubbleAlignment,
    theme: CometChatTheme
  ): any;
  abstract getFileMessageContentView(
    message: CometChat.MediaMessage,
    alignment: MessageBubbleAlignment,
    theme: CometChatTheme
  ): any;
  abstract getTextMessageTemplate(
    theme: CometChatTheme
  ): CometChatMessageTemplate;
  abstract getImageMessageTemplate(
    theme: CometChatTheme
  ): CometChatMessageTemplate;
  abstract getVideoMessageTemplate(
    theme: CometChatTheme
  ): CometChatMessageTemplate;
  abstract getAudioMessageTemplate(
    theme: CometChatTheme
  ): CometChatMessageTemplate;
  abstract getFileMessageTemplate(
    theme: CometChatTheme
  ): CometChatMessageTemplate;
  abstract getGroupActionTemplate(
    theme: CometChatTheme
  ): CometChatMessageTemplate;
  abstract getAllMessageTemplates(
    theme?: CometChatTheme
  ): Array<CometChatMessageTemplate>;
  abstract getMessageTemplate(
    messageType: string,
    messageCategory: string,
    theme?: CometChatTheme
  ): CometChatMessageTemplate | null;
  abstract getMessageOptions(
    loggedInUser: CometChat.User,
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): Array<CometChatActionsIcon | CometChatActionsView>;
  abstract getCommonOptions(
    loggedInUser: CometChat.User,
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    group?: CometChat.Group
  ): Array<CometChatActionsIcon | CometChatActionsView>;
  abstract getAttachmentOptions(
    theme: CometChatTheme,
    id?: Map<String, any>
  ): any;
  abstract getAllMessageTypes(): Array<string>;
  abstract getAllMessageCategories(): Array<string>;
  abstract getAuxiliaryOptions(
    id: Map<String, any>,
    user?: CometChat.User,
    group?: CometChat.Group,
    theme?: CometChatTheme
  ): any;
  abstract getId(): string;
  abstract getDeleteMessageBubble(
    messageObject: CometChat.BaseMessage,
    theme: CometChatTheme,
    style?: TextBubbleStyle
  ): any;
  abstract getGroupActionBubble(
    message: CometChat.BaseMessage,
    theme: CometChatTheme,
    style?: TextBubbleStyle
  ): any;
  abstract getTextMessageBubble(
    messageText: string,
    message: CometChat.TextMessage,
    alignment: MessageBubbleAlignment,
    theme: CometChatTheme,
    style?: TextBubbleStyle
  ): any;
  abstract getVideoMessageBubble(
    videoUrl: string,
    message: CometChat.MediaMessage,
    theme: CometChatTheme,
    thumbnailUrl?: string,
    onClick?: Function,
    style?: BaseStyle
  ): any;
  abstract getImageMessageBubble(
    imageUrl: string,
    placeholderImage: string,
    message: CometChat.MediaMessage,
    theme: CometChatTheme,
    onClick?: Function,
    style?: ImageBubbleStyle
  ): any;
  abstract getAudioMessageBubble(
    audioUrl: string,
    message: CometChat.MediaMessage,
    theme: CometChatTheme,
    title?: string,
    style?: BaseStyle
  ): any;
  abstract getFileMessageBubble(
    fileUrl: string,
    message: CometChat.MediaMessage,
    theme: CometChatTheme,
    title?: string,
    style?: FileBubbleStyle
  ): any;
  abstract getLastConversationMessage(
    conversation: CometChat.Conversation,
    loggedInUser: CometChat.User
  ): string;
  abstract getDefaultDetailsTemplate(
    loggedInUser: CometChat.User,
    user: CometChat.User | null,
    group: CometChat.Group | null,
    theme: CometChatTheme
  ): CometChatDetailsTemplate[];
  abstract getAuxiliaryHeaderMenu(
    user: CometChat.User,
    group: CometChat.Group
  ): any;
}
