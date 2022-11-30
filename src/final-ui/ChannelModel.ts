import { DynamicValue } from '@deutschesoft/awml/src/index.pure';

interface ChannelModel {
  index: number;
  gain$: DynamicValue<number>;
  leveldata1$: DynamicValue<number>;
  leveldata2$: DynamicValue<number>;
  labeldata$: DynamicValue<string>;
  labeldata1$: DynamicValue<string>;
  labeldata2$: DynamicValue<string>;
}

export default ChannelModel;
