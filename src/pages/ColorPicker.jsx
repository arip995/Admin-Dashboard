import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl z-0">
      <Header title="Employees" category="page" />
      <div className="text-center">
        <div className="" id='preview'></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div className="">
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent 
              id='inline-palette' 
              mode='Palette' 
              modeSwitcher={false} 
              inline={true} 
              showButtons={false}
              change={change}
            >
            </ColorPickerComponent>
          </div>
          <div className="">
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            >
            </ColorPickerComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker