import platform from '../../node_modules/native-base/src/theme/variables/platform';

let nativeBaseVar = {
	iconFamily:'Ionicons',
	toolbarDefaultBg:'transparent',
	footerDefaultBg:'transparent'
}

nativeBaseVar = Object.assign(platform,nativeBaseVar)

export default nativeBaseVar