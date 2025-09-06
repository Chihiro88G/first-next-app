import Link from 'next/link';
import { Fragment } from 'react';

export default function NestedCars() {

  return (
    <Fragment>
      <h1>Nested Cars</h1>
      <Link href='./'>
        To CARS
      </Link>
    </Fragment>
  )
}