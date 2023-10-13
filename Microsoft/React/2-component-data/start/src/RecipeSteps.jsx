import React from "react";

function RecipeSteps(){
    const steps = [
        'Adicione as batatas cortadas a uma panela com água e sal.',
        'Leve a panela para ferver.',
        'Ferva as batatas até ficarem macias, por cerca de 15 a 20 minutos.',
        'Coe as batatas.',
        'Coloque-as novamente na panela.',
        'Adicione a manteiga, o creme de leite, o sal e a pimenta a gosto.',
        'Amasse as batatas.',
        'Tempere novamente e adicione a manteiga e o creme de leite conforme desejado.'
    ]

    const stepsItems = steps.map((step, index)=>{
        return (
            <li key={index}>
                {step}
            </li>
        )
    })

    return (
        <ol>
            {stepsItems}
        </ol>
    )
}

export default RecipeSteps