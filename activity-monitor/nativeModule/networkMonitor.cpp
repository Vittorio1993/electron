#include <napi.h>
#include <windows.h>
#include <wininet.h>

// NetworkMonitor 类用于检测网络状态
class NetworkMonitor
{
public:
  static bool IsInternetConnected()
  {
    DWORD dwFlags;
    return InternetGetConnectedState(&dwFlags, 0) == TRUE;
  }
};

// N-API 包装函数
Napi::Boolean IsInternetConnectedWrapped(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  bool result = NetworkMonitor::IsInternetConnected();
  return Napi::Boolean::New(env, result);
}

// 初始化 N-API 模块，设置导出函数
Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  exports.Set(Napi::String::New(env, "isInternetConnected"),
              Napi::Function::New(env, IsInternetConnectedWrapped));
  return exports;
}

NODE_API_MODULE(networkmonitor, Init)
