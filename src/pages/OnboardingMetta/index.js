import React from 'react'
import { ILMetta } from '../../assets'
import { OnBoarding } from '../../components'

function index({ navigation }) {
    return (
        <OnBoarding
            title="MediApp"
            subtitle="Meditasi Meta"
            description="Meditasi yang penuh perhatian dan juga rasa cinta. Anda bisa belajar untuk berempati lebih banyak menghadapi kehidupan dengan peningkatan positif."
            ilustration={<ILMetta/>}
            onNext={() => navigation.replace('Home')}
            onSkip={() => navigation.replace('Home')}
        />
    )
}

export default index
