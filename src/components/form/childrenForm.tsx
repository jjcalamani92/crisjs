import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Upload,

} from 'antd';
import React, { FC, useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import 'antd/lib/form/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/button/style/index.css'
import 'antd/lib/cascader/style/index.css'
import 'antd/lib/collapse/style/index.css'
import 'antd/lib/auto-complete/style/index.css'
import 'antd/lib/radio/style/index.css'
import 'antd/lib/popover/style/index.css'
import 'antd/lib/checkbox/style/index.css'
// import 'antd/lib/options/style/index.css'

import { Main } from '../component';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import { useRouter } from 'next/router';

import Swal from 'sweetalert2';
import { graphQLClientS } from '../../swr/graphQLClient';
import { ADD_CHILDREN_0, ADD_CHILDREN_1, ADD_CHILDREN_2, CREATE_SITE, UPDATE_CHILDREN_0, UPDATE_CHILDREN_1, UPDATE_CHILDREN_2 } from '../../graphql';
import { getQuery, getURL } from '../../utils/function';
import { ChildrenForm, SiteForm } from '../../interfaces/site';
const { Option } = Select;

const normFile = (e: any) => {
  // console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
interface Option {
  href: string;
  name: string;
  children?: Option[];
}

const filter = (inputValue: string, path: any[]) =>
  path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );

interface Props {
  data: ChildrenForm
  routes?: Option[]
}

export const FormChildren: FC<Props> = ({ data, routes }) => {
  const [form] = Form.useForm();
  const { asPath, query, replace, push } = useRouter()
  const url = getQuery(asPath)

  const [route, setRoute] = useState()

  const onChangeRoute = (value: any, selectedOptions: any) => {
    setRoute(selectedOptions.map((data: { label: string; }) => ({ name: data.label })));
  };

  const onFinish = async (values: any) => {
    if (url.length === 7 && data.uid) {
      const data = { ...values, imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg", children_uid_0: url[4], children_uid_1: url[5], children_uid_2: url[6] }
      await graphQLClientS.request(UPDATE_CHILDREN_2, { _id: url[2], input: data }),
        push(getURL(asPath))

    } else if (url.length === 7) {
      const data = { ...values, imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg", children_uid_0: url[4], children_uid_1: url[5] }

      await graphQLClientS.request(ADD_CHILDREN_2, { _id: url[2], input: data })
      push(getURL(asPath))
    } else if (url.length === 6 && data.uid) {
      const data = { ...values, imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg", children_uid_0: url[4], children_uid_1: url[5] }
      await graphQLClientS.request(UPDATE_CHILDREN_1, { _id: url[2], input: data }),
        push(getURL(asPath))

    } else if (url.length === 6) {
      const data = { ...values, imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg", children_uid_0: url[4], }

      await graphQLClientS.request(ADD_CHILDREN_1, { _id: url[2], input: data })
      push(getURL(asPath))
    } else if (url.length === 5 && data.uid) {
      const data = { ...values, imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg", children_uid_0: url[4], }
      await graphQLClientS.request(UPDATE_CHILDREN_0, { _id: url[2], input: data }),
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Updated Page',
          showConfirmButton: false,
          timer: 1500
        })
      push(getURL(asPath))
    } else if (url.length === 5) {
      const data = { ...values, imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg" }
      await graphQLClientS.request(ADD_CHILDREN_0, { _id: url[2], input: data })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Created Page',
        showConfirmButton: false,
        timer: 1500
      })
      push(getURL(asPath))
    }

    // await graphQLClientS.request(CREATE_SITE, { input: dat })
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'Sitio Creado',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    // push(getURL(asPath))

    // let data = {
    //   ...values, site: query.id, imageSrc: image.map(news => (
    //     news.response
    //       ?
    //       news.response.url
    //       :
    //       news.url
    //   )), specs: ["hola mundo", "w"], tags: ["a", "b", "c"]
    // }

    // try {
    //   if (site._id) {
    //     // await graphQLClient.request(UPDATE_PRODUCT, { _id: product._id, input: data })
    //     // Swal.fire({
    //     //   position: 'center',
    //     //   icon: 'success',
    //     //   title: 'Producto Actualizado',
    //     //   showConfirmButton: false,
    //     //   timer: 1500
    //     // })
    //     // replace(getURL(asPath))

    //   } else {
    //     // await graphQLClient.request(CREATE_PRODUCT, { input: data })
    //     // Swal.fire({
    //     //   position: 'center',
    //     //   icon: 'success',
    //     //   title: 'Producto Creado',
    //     //   showConfirmButton: false,
    //     //   timer: 1500
    //     // })
    //     // push(getURL(asPath))
    //   }
    // } catch (error: any) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: error?.response.errors[0].message,
    //     footer: '<a href="#">¿Por qué tengo este problema?</a>'
    //   })
    // }

  };

  const [autoCompleteResult, setAutoCompleteResult] = useState(['']);



  return (
    <Main>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={data}
        scrollToFirstError
        className='p-6'
      >

        <div className=" sm:p-6 sm:shadow sm:rounded-md sm:overflow-hidden">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 col-span-2">

            <Form.Item
              name="name"
              label="Nombre"
              rules={[
                {
                  required: true,
                  message: 'Please input your product name!',
                },
              ]}
              className="col-span-12"
            >
              <Input />
            </Form.Item>


            <Form.Item
              name="description"
              label="Descripción"
              className='col-span-12'
              rules={[
                {
                  required: true,
                  message: 'Please input description of product',
                },
              ]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item
              name="imageAlt"
              label="Descripción de la imagen"
              className='col-span-12'
              rules={[
                {
                  required: true,
                  message: 'Please input description of product',
                },
              ]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            {/* <Form.Item name="type" label="Tipo" className='col-span-12 flex' >
              <Radio.Group className=''>
                <Radio value="a">eccomerce</Radio>
                <Radio value="b">marketing</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="client"
              label="Cliente"
              className='col-span-4'
              rules={[
                {
                  required: true,
                  message: 'Please select mark!',
                },
              ]}
            >
              <Select placeholder="select your mark">
                <Option value="male">piccoletti</Option>
                <Option value="female">makita</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item> */}

            {/* <Form.Item
              name="route"
              label="Ruta del Producto"
              rules={[
                {
                  type: 'array',
                  required: true,
                  message: 'Please select your routes!',
                },
              ]}
              className="col-span-12"
            >
              <Cascader
                options={routes}
                onChange={onChangeRoute}
                placeholder="Selecciona la ruta"
                fieldNames={{ label: "name", value: "href", children: "children" }}
                showSearch={{
                  filter
                }}
                onSearch={(value) => console.log(value)}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item label="Precio" className='col-span-6 lg:col-span-4'>
              <Form.Item name="price" noStyle >
                <InputNumber min={1} max={10} />
              </Form.Item>
              <span className="ant-form-text"> Bs</span>
            </Form.Item>

            <Form.Item label="Precio de Descuento" className='col-span-6 lg:col-span-4'>
              <Form.Item name="discountPrice" noStyle >
                <InputNumber min={1} max={10} />
              </Form.Item>
              <span className="ant-form-text"> Bs</span>
            </Form.Item>

            <Form.Item label="Inventario" className='col-span-6 lg:col-span-4'>
              <Form.Item name="inStock" noStyle >
                <InputNumber min={1} max={10} />
              </Form.Item>
              <span className="ant-form-text"> Unidades</span>
            </Form.Item>
            



            <Form.Item name="featured" label="Promociones" className='col-span-12 flex' >
              <Radio.Group className=''>
                <Radio value="a">descuentos marzo</Radio>
                <Radio value="b">descuentos abril</Radio>
                <Radio value="c">descuentos mayo</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Upload"
              className='col-span-12'
              valuePropName="fileList"
              getValueFromEvent={normFile}
              style={{ width: "auto" }}
            >
              {/* <ImageU image={image} setImage={setImage} /> 
            </Form.Item> */}


          </div>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              {
                data.uid ? `Actualizar` : `Crear`
              }
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Main>
  );
};
