import { getBackendValue, DynamicValue } from '@deutschesoft/awml/src/index.pure';

//array zones / input channels are hard coded
const channels = [
  { zone: 1 },
  { zone: 2 },
  { zone: 3 },
 // { zone: 4 }
];

const DeviceModel = channels.map(({zone}, index) => {

	return {
	    index: index,
	    gain$: getBackendValue(`Smartpi:Slot 1/DSP/Zones/${ zone }/LimiterOutputGain/Gain`) as DynamicValue<number>,
	    leveldata1$: getBackendValue(`Smartpi:Slot 1/DSP/Zones/${ zone }/Inputs/${ 1 }/InputLevel/Reading`) as DynamicValue<number>,
	    leveldata2$: getBackendValue(`Smartpi:Slot 1/DSP/Zones/${ zone }/Inputs/${ 2 }/InputLevel/Reading`) as DynamicValue<number>,
	    labeldata$: getBackendValue(`Smartpi:Slot 1/DSP/Zones/${ zone }/Name/Setting`) as DynamicValue<string>,
	    labeldata1$: getBackendValue(`Smartpi:Slot 1/DSP/Zones/${ zone }/Inputs/${ 1 }/Description/Setting`) as DynamicValue<string>,
	    labeldata2$: getBackendValue(`Smartpi:Slot 1/DSP/Zones/${ zone }/Inputs/${ 2 }/Description/Setting`) as DynamicValue<string>
	  };
});

export default DeviceModel;
