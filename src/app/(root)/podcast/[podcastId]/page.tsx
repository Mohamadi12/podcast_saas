import React from 'react'

const PodcastDetails = async ({ params }: { params: Promise<{ podcastId: string }> }) => {
    const podcastId = (await params).podcastId
    
  return (
    <div className="text-white-1">PodcastDetails for {podcastId}</div>
  )
}

export default PodcastDetails