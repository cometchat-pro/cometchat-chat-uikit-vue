import { DocumentBubbleStyle } from "my-cstom-package-lit";
import { OptionsStyle } from "uikit-utils-lerna";

export class CollaborativeWhiteboardConfiguration {
  private style: DocumentBubbleStyle;
  private iconURL: string;
  private optionIconURL: string;
  private optionStyle: OptionsStyle;

  constructor(configuration: {
    style?: DocumentBubbleStyle;
    iconURL?: string;
    optionIconURL?: string;
    optionStyle?: OptionsStyle;
  }) {
    const { style, iconURL, optionIconURL, optionStyle } = configuration;
    this.style = style as DocumentBubbleStyle;
    this.iconURL = iconURL as string;
    this.optionIconURL = optionIconURL as string;
    this.optionStyle = optionStyle as OptionsStyle;
  }

  getWhiteboardBubbleStyle(): DocumentBubbleStyle {
    return this.style;
  }

  getIconURL(): string {
    return this.iconURL;
  }

  getOptionIconURL(): string {
    return this.optionIconURL;
  }

  getOptionStyle(): OptionsStyle {
    return this.optionStyle;
  }
}
