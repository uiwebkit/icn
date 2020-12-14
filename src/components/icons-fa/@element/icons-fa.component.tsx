import { Component, ComponentInterface, h, VNode, Prop, Element } from '@stencil/core';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
import { uniFaTypeShort } from '../../../utils';

@Component({ tag: 'uni-icons-fa' })
export class UniIconsFaComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) type: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || this.el.textContent;
    this.el.innerHTML = '';
  }

  render(): VNode {
    const { name, color, size, angle, spin, speed, steps } = this;
    const props = { name, color, size, angle, spin, speed, steps };
    const UniIconsFaTag = `uni-icons-fa-${uniFaTypeShort(this.type)}`;

    return <UniIconsFaTag {...props} />;
  }
}
