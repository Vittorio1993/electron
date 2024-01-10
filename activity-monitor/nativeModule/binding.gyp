{
  "targets": [
    {
      "target_name": "networkmonitor",
      "sources": [ "networkMonitor.cpp" ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      "conditions": [
        ['OS=="win"', {
          "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
          "libraries": [ "wininet.lib" ]
        }]
      ]
    }
  ]
}
