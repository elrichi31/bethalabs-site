"use client"

import React, { useEffect, useState } from "react"
import { useAnimationsEnabled } from "@/contexts/animation-context"

type MotionProps = Record<string, any>

function stripMotionProps(props: MotionProps) {
  const { initial, animate, whileHover, whileTap, transition, exit, style, variants, whileInView, ...rest } = props
  return rest
}

export function MotionDiv(props: MotionProps) {
  const enabled = useAnimationsEnabled()
  const [Motion, setMotion] = useState<any | null>(null)

  useEffect(() => {
    let mounted = true
    if (enabled) {
      import('framer-motion').then((m) => {
        if (mounted) setMotion(() => m.motion)
      }).catch(() => {})
    }
    return () => { mounted = false }
  }, [enabled])

  if (enabled && Motion) {
    const MotionComp = Motion.div
    return <MotionComp {...props} />
  }

  const safe = stripMotionProps(props)
  return <div {...safe} />
}
