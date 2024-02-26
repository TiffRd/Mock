controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (YOU.isHittingTile(CollisionDirection.Bottom)) {
        YOU.vy = 0 - Math.sqrt(2 * (gravity * JumpHeight))
    }
})
let YOU: Sprite = null
let JumpHeight = 0
let gravity = 0
gravity = 500
let moveSpeed = 100
JumpHeight = 33
tiles.setCurrentTilemap(tilemap`level5`)
YOU = sprites.create(img`
    . . . . . . . . . . . . . . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 1 f f 1 6 6 6 6 6 6 6 . 
    . 6 1 1 1 1 6 6 6 6 6 6 6 . 
    . 6 1 1 1 1 6 6 6 6 6 6 6 . 
    . 6 d 1 1 6 6 6 6 6 6 6 6 . 
    . 6 6 1 6 6 6 6 1 1 1 1 6 . 
    . 6 6 1 6 6 f 6 1 f f 1 6 . 
    . 6 6 6 6 f 6 f 6 1 1 d 6 . 
    . 6 1 6 6 6 6 6 6 6 6 1 6 . 
    . 6 6 6 6 6 6 6 6 6 6 1 6 . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
YOU.ay = gravity
scene.cameraFollowSprite(YOU)
YOU.setVelocity(100, 0)
