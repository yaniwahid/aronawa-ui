import { useArgs } from '@storybook/addons';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../../atoms/Button';
import Modal from '../Modal';
import { IModal } from './Modal.types';

export default {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Modal Title',
      description: 'Use the title prop to change the title of the Modal',
      table: {
        type: { summary: 'text' },
      },
    },
    isOpen: {
      name: 'isOpen',
      defaultValue: false,
      description: 'Use the isOpen prop to change the isOpen of the Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isNoFooter: {
      name: 'isNoFooter',
      defaultValue: false,
      description: 'Use the isNoFooter prop to change the isNoFooter of the Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      description: 'Use the isLoading prop to change the isLoading of the Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      description: 'Use the isDisabled prop to change the isDisabled of the Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    okText: {
      name: 'okText',
      defaultValue: 'Submit',
      description: 'Use the okText prop to change the okText of the Modal',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Submit' },
      },
    },
    okColor: {
      name: 'okColor',
      defaultValue: 'primary',
      description: 'Use the okColor prop to change the okColor of the Modal',
      table: {
        type: { summary: 'neutral | primary | danger' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'radio',
        options: ['neutral', 'primary', 'danger'],
      },
    },
    okVariant: {
      name: 'okVariant',
      defaultValue: 'solid',
      description: 'Use the okVariant prop to change the okVariant of the Modal',
      table: {
        type: { summary: 'ghost | solid | outline' },
        defaultValue: { summary: 'solid' },
      },
      control: {
        type: 'radio',
        options: ['solid', 'ghost', 'outline'],
      },
    },
    cancelText: {
      name: 'cancelText',
      defaultValue: 'Cancel',
      description: 'Use the cancelText prop to change the cancelText of the Modal',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Cancel' },
      },
    },
    cancelColor: {
      name: 'cancelColor',
      defaultValue: 'primary',
      description: 'Use the cancelColor prop to change the cancelColor of the Modal',
      table: {
        type: { summary: 'neutral | primary | danger' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'radio',
        options: ['neutral', 'primary', 'danger'],
      },
    },
    cancelVariant: {
      name: 'cancelVariant',
      defaultValue: 'ghost',
      description: 'Use the cancelVariant prop to change the cancelVariant of the Modal',
      table: {
        type: { summary: 'ghost | solid | outline' },
        defaultValue: { summary: 'ghost' },
      },
      control: {
        type: 'radio',
        options: ['solid', 'ghost', 'outline'],
      },
    },
    size: {
      name: 'size',
      defaultValue: 'md',
      description: 'Use the size prop to change the size of the Modal',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      name: 'variant',
      defaultValue: 'clean',
      description: 'Use the variant prop to change the variant of the Modal',
      table: {
        type: { summary: 'default | filled | clean' },
        defaultValue: { summary: 'clean' },
      },
      control: {
        type: 'radio',
        options: ['default', 'filled', 'clean'],
      },
    },
  },
} as ComponentMeta<typeof Modal>;

export const Basic = (args: IModal) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const onClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <>
      <Button color="primary" onClick={() => updateArgs({ isOpen: !isOpen })}>
        Open Modal
      </Button>
      <Modal {...args} onClose={onClose}>
        In the morning I walked down the Boulevard to the rue Soufflot for coffee and brioche. It
        was a fine morning. The horse-chestnut trees in the Luxembourg gardens were in bloom. There
        was the pleasant early-morning feeling of a hot day. I read the papers with the coffee and
        then smoked a cigarette. The flower-women were coming up from the market and arranging their
        daily stock. Students went by going up to the law school, or down to the Sorbonne. The
        Boulevard was busy with trams and people going to work.
      </Modal>
    </>
  );
};

export const LongContent = (args: IModal) => {
  const [{ isOpen }, updateArgs] = useArgs();
  const onClose = () => updateArgs({ isOpen: !isOpen });
  return (
    <>
      <Button color="primary" onClick={() => updateArgs({ isOpen: !isOpen })}>
        Open Modal
      </Button>
      <Modal {...args} onClose={onClose}>
        <p>
          <strong>Gratis Pasang untuk Pembelian Ban</strong>
        </p>

        <ol>
          <li>Gratis ongkir dan pemasangan berlaku untuk produk di baris Ban + Gratis Pasang</li>
          <li>
            Hanya berlaku untuk customer yang bersedia melakukan pemasangan di daerah Danau Sunter,
            Jakarta Utara. Pemasangan ban sudah termasuk dengan balancing, nitrogen dan pentil.
          </li>
          <li>
            Setelah pembayaran diterima, customer akan dihubungi oleh pihak Bhinneka untuk
            melengkapi form penjadwalan pemasangan ban. Jadwal pemasangan akan diinformasikan 3
            (tiga) hari kerja setelah form diterima.
          </li>
        </ol>

        <p>
          <strong>Gratis Ongkir Se-Jadetabek dengan Bhinneka Xpress</strong>
        </p>

        <ol>
          <li>
            Pembelian antara tanggal 1-31&nbsp;Desember&nbsp;2020 GRATIS Ongkir hingga 3 kg dengan
            Bhinneka Xpress untuk area Jadetabek dengan memasukkan kode&nbsp;
            <strong>BANGKITLAGI</strong>.
          </li>
          <li>
            Gratis ongkir&nbsp;dapat dicek saat pemilihan jasa pengiriman melalui kode pos yang
            telah ditentukan oleh Bhinneka.Com.
          </li>
          <li>Khusus barang yang dijual dan dikirim oleh Bhinneka.Com.</li>
          <li>
            Diskon berlaku&nbsp;untuk 1 buyer sebanyak 3&nbsp;transaksi per hari selama periode
            promo.
          </li>
          <li>Hanya berlaku untuk pembelian melalui website, aplikasi dan call/chat/WhatsApp.</li>
        </ol>

        <p>
          <strong>CIMB NIAGA Cashback</strong>
        </p>

        <ol>
          <li>Periode promo 1 - 31 Desember 2020.&nbsp;</li>
          <li>Cashback hingga Rp 500,000.</li>
          <li>Kuota terbatas.</li>
          <li>Berlaku hanya untuk transaksi cicilan 0% tenor 6 dan 12 bulan.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>
            Berlaku untuk seluruh kartu kredit CIMB Niaga, Kecuali Corporate Card dan Kartu
            Regional.
          </li>
          <li>
            Diskon berlaku setiap 1 nomor kartu untuk 1 buyer sebanyak 1 transaksi per hari selama
            periode promo.
          </li>
          <li>
            Cashback akan dikreditkan ke billing statement customer maksimal cicilan bulan ke-2.
          </li>
        </ol>

        <p>
          <b>CIMB NIAGA (Diskon langsung)</b>
        </p>

        <ol>
          <li>Periode promo 1 - 31 Desember 2020.</li>
          <li>
            Diskon 12% maks. Rp120.000 minimal transaksi Rp 500.000. Kode:&nbsp;
            <strong>CIMB12</strong>
          </li>
          <li>Berlaku untuk 10 pengguna di setiap hari selama periode promo.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>
            Pembayaran yang berlaku menggunakan kartu kredit dengan metode pembayaran full payment
            dan cicilan 0% tenor 6, dan 12 bulan.
          </li>
          <li>
            Diskon berlaku setiap 1 nomor kartu untuk 1 buyer sebanyak 1 transaksi per hari selama
            periode promo.
          </li>
          <li>Promo tidak dapat digabung dengan promo lainnya.</li>
        </ol>

        <p>
          <strong>BRI</strong>
        </p>

        <ol>
          <li>Periode promo 1 - 31 Desember 2020.</li>
          <li>Diskon Rp22.000 minimal transaksi Rp50.000.</li>
          <li>
            Kode promo E-Pay:&nbsp;<strong>BRIEPAY12</strong>
          </li>
          <li>
            Kode promo Debit Online:&nbsp;<strong>BRIDB12</strong>
          </li>
          <li>Berlaku untuk 50 pengguna di setiap hari selama periode&nbsp;promo.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>Pembayaran yang berlaku menggunakan Debit Online dan E-pay BRI.</li>
          <li>
            Diskon berlaku setiap 1 nomor kartu untuk 1 buyer sebanyak 1 transaksi per hari selama
            periode promo.
          </li>
          <li>Promo tidak dapat digabung dengan promo lainnya.</li>
        </ol>

        <p>
          <strong>MANDIRI Virtual Account</strong>
        </p>

        <ol>
          <li>Periode promo 11 - 22 Desember 2020.</li>
          <li>
            Diskon 12% maks. Rp120.000 minimal transaksi Rp200,000. Kode:&nbsp;
            <strong>MNDRVA12</strong>
          </li>
          <li>Berlaku untuk 15 pengguna di setiap hari selama periode promo.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>Pembayaran yang berlaku menggunakan Mandiri Virtual Account</li>
          <li>
            Diskon berlaku setiap 1 nomor kartu untuk 1 buyer sebanyak 1 transaksi per hari selama
            periode promo.
          </li>
          <li>Promo tidak dapat digabung dengan promo lainnya.</li>
        </ol>

        <p>
          <strong>MANDIRI Kartu Kredit</strong>
        </p>

        <ol>
          <li>Periode promo 1 - 31 Desember 2020.</li>
          <li>
            Diskon Rp125.000 minimal transaksi Rp500,000. Kode:&nbsp;
            <strong>MNDRCCI12</strong>
          </li>
          <li>Berlaku untuk 20 pengguna di setiap hari selama periode promo.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>
            Pembayaran yang berlaku menggunakan Debit dan Kartu Kredit dengan metode pembayaran full
            payment dan cicilan 0% tenor 3, 6, dan 12 bulan.
          </li>
          <li>Diskon berlaku setiap 1 buyer sebanyak 1 transaksi per hari selama periode promo.</li>
          <li>Promo tidak dapat digabung dengan promo lainnya.</li>
        </ol>

        <p>
          <strong>BCA Kartu Kredit</strong>
        </p>

        <ol>
          <li>Periode promo 1 - 31 Desember 2020.</li>
          <li>
            Diskon 12% maks. Rp120.000 minimal transaksi Rp500,000. Kode:&nbsp;
            <strong>BCACC12</strong>
          </li>
          <li>Berlaku untuk 105 pengguna setiap minggu selama periode promo.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>
            Pembayaran yang berlaku menggunakan kartu kredit dengan metode pembayaran full payment
            dan cicilan 0% tenor 3, 6, dan 12 bulan.
          </li>
          <li>
            Diskon berlaku setiap 1 nomor kartu untuk 1 buyer sebanyak 1 transaksi per hari selama
            periode promo.
          </li>
          <li>Promo tidak dapat digabung dengan promo lainnya.</li>
        </ol>

        <p>
          <strong>BCA Virtual Account</strong>
        </p>

        <ol>
          <li>Periode promo 1 - 31 Desember 2020.</li>
          <li>
            Diskon 12% maks. Rp120.000 minimal transaksi Rp200,000. Kode:&nbsp;
            <strong>BCAVA12</strong>
          </li>
          <li>Berlaku untuk 105 pengguna setiap minggu selama periode promo.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>Pembayaran yang berlaku menggunakan BCA Virtual Account</li>
          <li>Diskon berlaku setiap 1 buyer sebanyak 1 transaksi per hari selama periode promo.</li>
          <li>Promo tidak dapat digabung dengan promo lainnya.</li>
        </ol>

        <p>
          <strong>Maybank</strong>
        </p>

        <ol>
          <li>Periode promo 1 - 31 Desember 2020.</li>
          <li>
            Diskon 12% maks. Rp220.000 minimal transaksi Rp1,000,000. Kode:&nbsp;
            <strong>MAYBANK12</strong>
          </li>
          <li>Berlaku untuk 5 pengguna di setiap hari selama periode promo.</li>
          <li>
            Berlaku untuk semua produk yang dijual dan dikirim oleh Bhinneka, kecuali digital
            product dan marketplace.
          </li>
          <li>
            Pembayaran yang berlaku menggunakan kartu kredit dengan metode pembayaran full payment
            dan cicilan 0% tenor 3, 6, dan 12 bulan.
          </li>
          <li>
            Diskon berlaku setiap 1 nomor kartu untuk 1 buyer sebanyak 1 transaksi selama periode
            promo.
          </li>
          <li>Promo tidak dapat digabung dengan promo lainnya.</li>
        </ol>
      </Modal>
    </>
  );
};
