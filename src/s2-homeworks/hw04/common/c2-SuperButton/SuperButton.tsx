import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import s from "./SuperButton.module.css"

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
  {
    xType,
    className,
    disabled,
    ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
  }
) => {

/*  const finalClassName = s.button
    //+ (disabled ? s.disabled : xType === "red" ? s.red + (className ? " " + className : " ") : ' ')*/

  const disabledBtn = s.button && s.disabled
  const defaultBtn = s.button && s.default
  const redBtn = s.button && s.red
  const secondaryBtn = s.button && s.secondary
     // задачка на смешивание классов

  //console.log(finalClassName)
  return (
    <button
      disabled={disabled}
      className={className}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />

  )

}

export default SuperButton
