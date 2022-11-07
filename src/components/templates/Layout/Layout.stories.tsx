import { useArgs } from '@storybook/addons';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Color from '../../../themes/Color';
import Button from '../../atoms/Button';
import Colorpicker from '../../atoms/Colorpicker';
import { DropdownItem } from '../../atoms/Dropdown';
import Icon from '../../atoms/Icon';
import Switch from '../../atoms/Switch';
import { toast, toastBody } from '../../atoms/Toast';
import Drawer from '../../molecules/Drawer';
import Form, { FormItem } from '../../molecules/Form';
import { FormAction } from '../../molecules/Form/Form';
import Tabs, { TabItem } from '../../molecules/Tabs';
import { SideMenuItem, SideMenuSub } from '../../organisms/SideMenu';
import Layout from './Layout';

export default {
  title: 'Templates/Layout',
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

export const Basic = () => {
  const [{ color, isOpen }, updateArgs] = useArgs();
  const onClose = () => {
    updateArgs({ isOpen: !isOpen });
    toast(toastBody(true, 'Page has been unpublished successfully', [], 'Unpublished'));
  };
  const onChange = () => updateArgs({ color: color });
  return (
    <Layout
      avatarUrl="https://bit.ly/dan-abramov"
      username="Dan Abrahmov"
      userMenu={
        <>
          <DropdownItem icon="user">Profil</DropdownItem>
          <DropdownItem
            icon="sign-out"
            color={Color.danger.default}
            hoverColor={Color.danger.default}
          >
            Keluar
          </DropdownItem>
        </>
      }
      navbarMenu={
        <>
          <Icon name="bell" color="#fff" size={20} />
          <Icon name="envelope" color="#fff" size={20} />
        </>
      }
      sideMenu={
        <>
          <SideMenuItem isActive icon="dashboard" label="Dashboard" />
          <SideMenuItem icon="grid" label="Page Builder" />
          <SideMenuSub label="Setting" icon="cog">
            <SideMenuItem label="Header" />
            <SideMenuItem label="Footer" />
          </SideMenuSub>
        </>
      }
      title="Footer"
      action={
        <Button icon="plus" color="primary" onClick={() => updateArgs({ isOpen: !isOpen })}>
          Add Menu
        </Button>
      }
    >
      <Drawer isOpen={isOpen} onClose={onClose} title="Drawer" top={56}>
        In the morning I walked down the Boulevard to the rue Soufflot for coffee and brioche. It
        was a fine morning. The horse-chestnut trees in the Luxembourg gardens were in bloom. There
        was the pleasant early-morning feeling of a hot day. I read the papers with the coffee and
        then smoked a cigarette. The flower-women were coming up from the market and arranging their
        daily stock. Students went by going up to the law school, or down to the Sorbonne. The
        Boulevard was busy with trams and people going to work.
      </Drawer>
      <Tabs>
        <TabItem title="Information & Contact Us">
          <Form>
            <FormItem label="Information & Contact Us">
              <Switch unCheckedLabel="Unpublish" checkedLabel="Publish" />
            </FormItem>
            <FormItem label="Information & Contact Us Text Color" isRequired>
              <Colorpicker color="#fff" onChange={onChange} />
            </FormItem>
            <FormItem label="Information & Contact Us Background" isRequired>
              <Colorpicker color="#104D97" />
            </FormItem>
            <FormItem label="Separator Line Color" isRequired>
              <Colorpicker color="#5F9CE2" />
            </FormItem>
          </Form>
          <FormAction>
            <Button>Cancel</Button>
            <Button color="primary">Save</Button>
          </FormAction>
        </TabItem>
        <TabItem title="SEO" />
        <TabItem title="Footer Menu" />
        <TabItem title="Customer Engagement" />
        <TabItem title="Copyright" />
      </Tabs>
    </Layout>
  );
};
