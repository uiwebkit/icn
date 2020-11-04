import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconDefault, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-round-shadow',
  styleUrl: '../styles/icons-mat-round.css',
  shadow: true,
})
export class UniIconsMatRoundShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: UniSize = UniIconDefault.size as UniSize;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    return (
      <uni-icons-mat-wrap
        font={'round'}
        name={this.name}
        color={this.color}
        size={this.size}
        rotate={this.rotate}
        degree={this.degree}
        speed={this.speed}
        steps={this.steps}
      >
        <i>
          {this.name}
          <slot />
        </i>
      </uni-icons-mat-wrap>
    );
  }
}