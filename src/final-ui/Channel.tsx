import Fader from './widgets/ChannelFader';
import Meter from './widgets/ChannelMeter';
import Label from './widgets/Label';
import ChannelModel from './ChannelModel';

interface ChannelProperties {
  model: ChannelModel;
}

function Channel({ model }: ChannelProperties) {
  return (
    <div className="ChannelStrip">
      <div className="FullHeight">
        <Meter leveldata$={ model.leveldata1$ } labeldata$={ model.labeldata1$ }/>
        <Meter leveldata$={ model.leveldata2$ } labeldata$={ model.labeldata2$ }/>
        <Fader gain$={ model.gain$ }/>
      </div>
      <div className="Label">
       <Label labeldata$={ model.labeldata$ } />
      </div>
    </div>
  );
}

export default Channel;
