import React from 'react'
import styled, { css } from 'styled-components'
import { FiFilter } from 'react-icons/fi'
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosClose } from 'react-icons/io'
import { IoMdMenu } from 'react-icons/io'
import { MdNearMe } from 'react-icons/md'

const iconStyle = `
  vertical-align: middle;
  display: table-cell;
  text-align: center;
`
export const Filter = styled(FiFilter)`
  ${iconStyle}
  font-size: 32px;
`
const ArrowUp = styled(IoIosArrowUp)`
  ${iconStyle}
  font-size: 43px;
`
const ArrowDown = styled(IoIosArrowDown)`
  ${iconStyle}
  font-size: 43px;
`
const ArrowForward = styled(IoIosArrowForward)`
  ${iconStyle}
  font-size: 31px;
`
const ArrowBack = styled(IoIosArrowBack)`
  ${iconStyle}
  font-size: 31px;
`
const Close = styled(IoIosClose)`
  ${iconStyle}
  font-size:  ${props => props.size || '10'}px;
  `
const List = styled(IoMdMenu)`
  ${iconStyle}
  font-size: 36px;
`
const Locate = styled(MdNearMe)`
  ${iconStyle}
  font-size: 33px;
`

const IconButton = styled.div`
  cursor: pointer;
  pointer-events: auto;
  padding: ${props => props.padding || '0px'};
  margin-left: ${props => props.leftMargin || '0px'};
  display: table;
  color: black;
  border-radius: 7px;
  ${props => props.hoverJump && css`
  @media (min-width: 600px) {
    &:hover { 
      padding-bottom: 3px;
    }
  }`}
`

export const FilterButton = ({ onClick }) => <IconButton padding='5px' onClick={onClick}> <Filter /> </IconButton>

export const ArrowUpButton = ({ onClick }) => <IconButton hoverJump onClick={onClick}> <ArrowUp /></IconButton>

export const ArrowDownButton = ({ onClick }) => <IconButton hoverJump onClick={onClick}> <ArrowDown /></IconButton>

export const ArrowForwardButton = ({ onClick }) => <IconButton onClick={onClick} leftMargin={'-3px'}> <ArrowForward /> </IconButton>

export const ArrowBackButton = ({ onClick }) => <IconButton onClick={onClick} leftMargin={'-6px'}> <ArrowBack /></IconButton>

export const CloseButton = ({ onClick, size }) => <IconButton onClick={onClick}> <Close size={size} /></IconButton>

export const ListButton = ({ onClick }) => <IconButton hoverJump onClick={onClick}> <List /></IconButton>

export const LocateButton = ({ handleClick }) => <IconButton hoverJump onClick={handleClick}> <Locate /></IconButton>
