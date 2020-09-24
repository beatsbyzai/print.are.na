import React from "react"
import styled from "styled-components"

const Title = styled.h6`
  font-weight: normal;
  margin: 0;
  font-size: 16pt;
  text-align:center;
  width: 100%;
`

const Container = styled.div`
  text-align:center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 2em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
`

const Slug = styled.span`
  color: rgb(23, 172, 16);
`

interface LoadingPageProps {
  slug: string
  totalPages: null | number
}

const LoadingPage: React.FC<LoadingPageProps> = ({ slug, totalPages }) => {
  let newSlug = slug ? slug : "Dark Matters Dictionary"

  return (
    <Container className="page cover">
      <Title>
        {/* Loading "The Dictionary of Dark Matters" */}
        {/* Converting channel <Slug>{newSlug}</Slug> into a book... */}
      </Title><div className="loader"></div>
      {totalPages && (
        <>
          {/* <Title>Creating {totalPages * 50} pages...</Title> */}
        </>
      )}
    </Container>
  )
}

export default LoadingPage
