import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function File({ file }) {
  return (
    <a
      href={file.url}
      target='_blank'
      rel='noreferrer'
      className='btn btn-outline text-truncate w-100'
    >
      <FontAwesomeIcon icon={faFile} className='mr-2' />
      {file.name}
    </a>
  )
}
