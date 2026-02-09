package com.rtnwefitterhealthconnect

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.rtnwefitterhealthconnect.NativeRTNWeFitterHealthConnectSpec

class WeFitterHealthConnectModule(reactContext: ReactApplicationContext) : NativeRTNWeFitterHealthConnectSpec(reactContext) {

    override fun getName() = NAME

    override fun add(a: Double, b: Double, promise: Promise) {
        promise.resolve(a + b)
    }

    companion object {
        const val NAME = "RTNWeFitterHealthConnect"
    }
}
