# Timeline
## 2022-03-20 새벽상황
Nativescript Vue 나 ionic을 쓸가 고민을 하다가 일단 <br>
Nativescript Vue로 개발을 하기로 했습니다.<br>
안드로이드 스튜디오에서 디자인 하기위해서 폴더를 생성 했습니다
## 2022-03-20 오후상황
어느 개발자로 부탁으로 ionic으로 개발하기로 했습니다.

## 2022-03-22 새벽상황
1차작인 디자인 완성<br>
오른쪽에 보이는 버튼을 기능을 완성하고<br>
다음 페이지는 빠르게 만들어 질것으로 보임<br>
<img src="https://user-images.githubusercontent.com/87979171/159343414-d0ab753d-4a75-48bd-b00a-6c24df6f056e.png" width="20%" height="auto"/>

### 각 레이어별 표시할 사항
Home: 학사공지, 장학공지, 기숙사공지<br>
비교과: 비교과, 비교과공지<br>
취업: 취업공지, 인턴십<br>
동의대 2.0: 바로 동의대 2.0으로 이동<br>

# 안드로이드 작업후 추가사항
ionic에서 PC브라우저에서는 자동으로 테마가 조정되는 걸 확인을 했지만<br>
안드로이드 앱 WebView에서는 안되는 이슈를 발견함<br>
이를 해결하기 위해서는 안드로이드 프로젝트에 아래에 코드를 추가해주시기 바람<br>
```java
import android.content.res.Configuration;
import android.webkit.WebSettings;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    void setDarkMode() {
        // Android "fix" for enabling dark mode
        // @see: https://github.com/ionic-team/capacitor/discussions/1978
        int nightModeFlags = getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
        WebSettings webSettings = this.bridge.getWebView().getSettings();
        if (nightModeFlags == Configuration.UI_MODE_NIGHT_YES) {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
                // As of Android 10, you can simply force the dark mode
                webSettings.setForceDark(WebSettings.FORCE_DARK_ON);
            }
            // Before Android 10, we need to use a CSS class based fallback
            this.bridge.getWebView().evaluateJavascript("document.body.classList.toggle('dark', true);", null);
        } else {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
                webSettings.setForceDark(WebSettings.FORCE_DARK_OFF);
            }
            this.bridge.getWebView().evaluateJavascript("document.body.classList.toggle('dark', false);", null);
        }
    }

    @Override
    public void onStart() {
        super.onStart();
        setDarkMode();
    }

    @Override
    public void onResume() {
        super.onResume();
        setDarkMode();
    }
}
```
# 문의 사항
문의 사항은 이메일이나 디코, 카톡으로 받습니다
이메일:lyw514549@gmail.com
디코:Ubuntu 20.04.3 LTS#7195
