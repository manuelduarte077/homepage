import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NewsApp">
    <Container>
      <Title>
        News App <Badge>2021</Badge>
      </Title>
      <P>Kotlin News App </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, MVVM</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/manuelduarte077/news-app-mvvm">
            NewsApp  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="https://bit.ly/2k1H1t6" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/modetokyo_01.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/modetokyo_02.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/modetokyo_03.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work