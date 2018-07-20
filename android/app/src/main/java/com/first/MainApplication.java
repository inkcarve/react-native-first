package com.first;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import se.bonniernews.rn3d.RN3DPackage;
import se.bonniernews.rn3d.RN3DPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new FastImageViewPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new RN3DPackage(),
            new RN3DPackage(),
            new VectorIconsPackage(),
            new ReactMaterialKitPackage(),
            new BlurViewPackage(),
            new LottiePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
