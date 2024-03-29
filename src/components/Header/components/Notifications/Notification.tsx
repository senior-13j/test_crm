import { FC } from 'react';
import SVG from 'react-inlinesvg';
import { BodyCard, BodyContainer, Card, Root, Top } from './styled';
import { Badge, Button, Flex, Text } from '@radix-ui/themes';
import { IconButton, MenuScroll } from '@/styles/mixins';
import { ArrowRightIcon, CaretDownIcon } from '@radix-ui/react-icons';
import mailIcon from '@/assets/icons/email.svg';

const Notifications: FC = () => {
  return (
    <Root>
      <Top>
        <Button>Aboneaza-te</Button>
        <Text>
          Ai{' '}
          <Badge color='red' variant='solid'>
            202
          </Badge>{' '}
          mesaje necitite
        </Text>
      </Top>
      <MenuScroll>
        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                5 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
          <BodyContainer>
            <BodyCard>
              <div>
                <Text style={{ fontWeight: '700', marginBottom: 'rem' }}>
                  Notification title
                </Text>
                <br />
                <Text>Some description example...</Text>
              </div>
              <IconButton style={{ marginLeft: '2rem' }}>
                <ArrowRightIcon />
              </IconButton>
            </BodyCard>
          </BodyContainer>
        </Card>

        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                4 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>

        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                4 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>

        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                4 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>

        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                3 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>

        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                3 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>
        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                2 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>
        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                2 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>
        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                2 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>
        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                1 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>
        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                29 Sep 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>
        <Card>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                27 Sep 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </Card>
      </MenuScroll>
    </Root>
  );
};

export default Notifications;
