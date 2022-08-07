import { gql } from "graphql-request";

export const CHILDREN_FRAGMENT = gql`
  fragment childrenData on Children {
    uid
    slug
    head {
      name
      href
      description
      image {
        src
        alt
      }
    }
    body {
      title
      href
      image {
        src
        alt
      }
    }
    type
  }
`;

export const SITES = gql`
  query Sites {
    sites {
      _id
      data {
        name
        numberPhone
        address
        description
        domain {
          name
          dlt
        }
      }
      children {
        uid
        slug
        head {
          name
          href
          description
          image {
            src
            alt
          }
        }
        body {
          title
          href
          image {
            src
            alt
          }
        }
        type
        children {
          uid
          slug
          head {
            name
            href
            description
            image {
              src
              alt
            }
          }
          body {
            title
            href
            image {
              src
              alt
            }
          }
          type
        }
      }
    }
  }
`;
